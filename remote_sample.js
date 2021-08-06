/*Example*/

const foo = function(done){
  //... do something (risky) ... do
  if (error) return done(error);
  done(null, result);
}