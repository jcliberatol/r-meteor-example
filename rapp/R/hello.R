runtest <- function(items, individuals, model, seed ){
  # connect
  library(rmongodb)
  if(!exists("mongo")){
    mongo = mongo.create(host = "localhost",db="irtpp")
  }
  if(!mongo.is.connected(mongo)){
    mongo = mongo.create(host = "localhost",db="irtpp")
  }

  ret = list("items" = items, "individuals" = individuals, "model" = model, "seed" = seed);
  ret = mongo.bson.from.list(ret);
  mongo.insert(mongo,"irtpp.example",ret);
}
