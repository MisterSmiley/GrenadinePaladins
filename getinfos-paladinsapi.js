const paladins = require('paladins-api');
const pal = new paladins('2116', 'A1A9076FF6214CEDBA99BBF8FD7EC166');
var sessionId;
module.exports = class API {
    
    getNewSessionID(){
        pal.connect((err, res) => {
            if(!err) {
                sessionId = res;
            }
        });
        return sessionId;
    }
    
    getPlayerInfos(player_name){
        var infos_array = [];
        pal.getPlayer(sessionId, player_name, (err, res) => {
            if(!err){
                var str = JSON.stringify(res).replace("[", "").replace("]", "");
                var str2 = JSON.parse(str);
                infosPlayer = str2;
                infos_array["created_datetime"] = str2.Created_Datetime;
                infos_array["id"] = str2.Id;
                infos_array["last_login_datetime"] = str2.Last_Login_Datetime;
                infos_array["leaves"] = str2.Leaves;
                infos_array["level"] = str2.Level;
                infos_array["losses"] = str2.Losses;
                infos_array["masterylevel"] = str2.MasteryLevel;
                infos_array["name"] = str2.Name;
                infos_array["personal_status_message1"] = str2.Personal_Status_Message;
                infos_array["region"] = str2.Region;
                infos_array["teamid"] = str2.TeamID;
                infos_array["team_name"] = str2.Team_Name;
                infos_array["total_achivements"] = str2.Total_Achievements;
                infos_array["total_worshippers"] = str2.Total_Worshippers;
                infos_array["wins"] = str2.Wins;
                infos_array["ret_msg1"] = str2.ret_msg;
                infos_array["match_played"] = str2.Losses + str3.Wins;
                
                return infos_array;
            } else {
                return err;
            }
        });
    }
    
    getStatusInfos(player_name){
        var infos_array = [];
        pal.getPlayerStatus(sessionId, player_name, (err, res) => {
            if(!err){
                var str = JSON.stringify(res).replace("[", "").replace("]", "");
                var str2 = JSON.parse(str);
                infosStatus = str2;
                infos_array["match"] = str2.Match;
                infos_array["personal_status_message2"] = str2.personal_status_message;
                infos_array["ret_msg2"] = str2.ret_msg;
                infos_array["status"] = str2.status;
                infos_array["status_string"] = str2.status_string;
                return infos_array;
            } else {
                return err;
            }
        });
    }
    
    
};