import {FkConstraintMethod, ForeignKey, Model} from "#structs/model.mjs";
import {DataTypes} from "sequelize";

const name = 'affect'
export default new Model(name, {
  amount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 20
    }
  }
}, { timestamps: false }, [
    new ForeignKey(FkConstraintMethod.BELONGS_TO_MANY, 'reaction', 'statistic', { through: name })
])
