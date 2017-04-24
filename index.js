const Evaluator = require('./evaluator.js');
const trainer = require('./trainer.js');

module.exports = {
  Evaluator,
  trainer: trainer.train,
  TRAINING_MODE: trainer.TRAINING_MODE,
};
