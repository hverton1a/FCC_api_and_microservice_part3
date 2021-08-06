var mongoose = require('mongoose');
import {blogSchema} from 'mongoose_model_sample';

const Blog = mongoose.model('Blog', blogSchema);