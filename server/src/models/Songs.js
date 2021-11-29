module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
  
  
  return Song
}