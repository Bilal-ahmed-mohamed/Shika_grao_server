const db = require("../config/config")

const {DataTypes, STRING} = require("sequelize");

const Turfs = db.define('turfs', {
    title:{
        type:DataTypes.STRING,
        allowNull : false
    },
    format:{
        type:DataTypes.STRING,
        allowNull : false
    },
    surface:{
        type:DataTypes.STRING,
        allowNull : false
    },
    postcode:{
        type:DataTypes.STRING,
        allowNull : false
    },
    numberOfPitches:{
        type:DataTypes.DOUBLE,
        allowNull : false
    },
    venue:{
        type:DataTypes.STRING,
        allowNull : false
    },
    facilities:{
        type:DataTypes.STRING,
        allowNull : false
    },
    startTime :{
        type:DataTypes.STRING,
        allowNull : false
    },
    closeTime : {
        type:DataTypes.STRING,
        allowNull : false
    },
    matchDuration : {
        type:DataTypes.STRING,
        allowNull : false
    },
    Image:{
        type:DataTypes.STRING,
        allowNull : false
    }
    

} ,
{
    timestamps : true,
    //prevent sequelize from pluralizing table names
    freezeTableName : true,

});

db.sync()
.then(() => {
    console.log("Turfs table  synched successfully");
})
.catch((error) => {
    console.log("unable to synched Turfs table :" , error);
})

module.exports = Turfs;
