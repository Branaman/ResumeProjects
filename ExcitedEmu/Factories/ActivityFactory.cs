using System.Collections.Generic;
using System.Data;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Options;
using ExcitedEmu.Models;
using Dapper;
using System.Linq;
namespace ExcitedEmu.Factories {
    public class ActivityFactory : IFactory<Activity>{
        private readonly IOptions<MySqlOptions> MySqlConfig;
        public ActivityFactory(IOptions<MySqlOptions> config)
        {
            MySqlConfig = config;
        }
        internal IDbConnection Connection {
            get {
                return new MySqlConnection(MySqlConfig.Value.ConnectionString);
            }
        }
        public List<JoinResult> GetActivities() {
            using(IDbConnection dbConnection = Connection)
            {
                using(IDbCommand command = dbConnection.CreateCommand())
                {
                    string query = $"SELECT activities.title, activities.date, activities.duration, users.first_name as coordinator, users.idusers as coordinatorID, activities.participants, activities.idactivities FROM users LEFT OUTER JOIN activities ON users.idusers = activities.users_idusers where idactivities > 0 order by date";
                    dbConnection.Open();
                    return dbConnection.Query<JoinResult>(query).ToList();
                }
            }
        }
        public List<JoinResult> MyActivities(int userID) {
            using(IDbConnection dbConnection = Connection)
            {
                using(IDbCommand command = dbConnection.CreateCommand())
                {
                    
                    string query = $"SELECT activities.title, activities.date, activities.duration, activities.participants, activities.idactivities FROM activities LEFT OUTER JOIN participants ON activities.idactivities = participants.activities_idactivities where participants.users_idusers = {userID}";
                    dbConnection.Open();
                    return dbConnection.Query<JoinResult>(query).ToList();
                }
            }
        }
        public JoinResult GetActivity(int activityID) {
            using(IDbConnection dbConnection = Connection)
            {
                using(IDbCommand command = dbConnection.CreateCommand())
                {
                    string query = $"SELECT activities.title, activities.date, activities.duration, activities.description, users.first_name as coordinator FROM users LEFT OUTER JOIN activities ON users.idusers = activities.users_idusers where idactivities = '{activityID}'";
                    dbConnection.Open();
                    return dbConnection.Query<JoinResult>(query).First();
                }
            }
        }
        public List<Participant> GetParticipants(int activityID){
            using(IDbConnection dbConnection = Connection)
            {
                using(IDbCommand command = dbConnection.CreateCommand())
                {
                    string query = $"SELECT users.first_name as name FROM users LEFT OUTER JOIN participants ON users.idusers = participants.users_idusers where activities_idactivities = '{activityID}'";
                    dbConnection.Open();
                    return dbConnection.Query<Participant>(query).ToList();
                }
            }
        }
        public int AddActivity(Activity Activity, int userID){
            using (IDbConnection dbConnection = Connection){
                Activity.duration = Activity.duration.ToString() + " "+ Activity.timeMod.ToString();
                string datetime = Activity.date.ToString("yyyy/MM/dd ") + Activity.time.ToString("HH:mm:ss");
                string query = $"INSERT INTO activities (title, description, date, duration, users_idusers, participants) VALUES (@title, @description, '{datetime}' , @duration, '{userID}', @participants)";
                dbConnection.Execute(query, Activity);
                query = $"SELECT * FROM activities WHERE title = @title";
                Activity result = dbConnection.Query<Activity>(query, Activity).First();
                return result.idactivities;
            }
        }
        public void JoinActivity(int activityID, int userID){
            using (IDbConnection dbConnection = Connection){
                string query = $"SELECT * FROM participants WHERE activities_idactivities = '{activityID}' and users_idusers = '{userID}'";
                if (dbConnection.Query<Participants>(query).ToList().Count == 0)
                {
                    query = $"INSERT INTO participants (activities_idactivities, users_idusers) VALUES ('{activityID}','{userID}')";
                    dbConnection.Execute(query);
                    query = $"UPDATE activities SET participants = participants + 1 WHERE idactivities = '{activityID}'";
                    dbConnection.Execute(query);
                }
            }
        }

        public void LeaveActivity(int activityID,int userID){
            using (IDbConnection dbConnection = Connection){
                string query = $"DELETE FROM participants WHERE activities_idactivities = '{activityID}' and users_idusers = '{userID}'";
                dbConnection.Execute(query);
                query = $"UPDATE activities SET participants = participants - 1 WHERE idactivities = '{activityID}'";
                dbConnection.Execute(query);
            }
        }
        public void DeleteActivity(int activityID){
            using (IDbConnection dbConnection = Connection){
                string query = $"DELETE FROM participants WHERE activities_idactivities = '{activityID}'";
                dbConnection.Execute(query);
                query = $"DELETE FROM activities WHERE idactivities = '{activityID}'";
                dbConnection.Execute(query);
            }
        }
    }
}
