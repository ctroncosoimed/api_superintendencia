import mongoose from 'mongoose';

mongoose.connect('mongodb://db/graphql',{ useNewUrlParser: true })
.then(() => console.log('mongo connect'))
.catch(err => console.log(err));