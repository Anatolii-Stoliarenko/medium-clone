         s   r        �������������nLBN��[���B��            u'use strict'

module.exports = !!(
  (process.env.LAMBDA_TASK_ROOT && process.env.AWS_EXECUTION_ENV) ||
  false
)
