const mongoose = require("mongoose");

// schema
const toolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tool Name required"],
      maxlength: [100, "Tool Name cannot exceed 100 characters"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Tool Description required"],
      maxlength: [500, "Tool Description cannot exceed 500 characters"],
    },
    category: {
      type: String,
      required: true,
      trim: true,
      enum: {
        value: [
          "IDE",
          "API_TOOL",
          "VERSION_CONTROL",
          "DATABASE",
          "DESIGN",
          "PRODUCTIVITY",
          "OTHER",
        ],
        message: "Invalid category",
      },
    },
    url: {
      type: String,
      required: true,
      trim: true,
      validation: {
        validator: function (url) {
          return /^https?:\/\/.+/.test(url);
        },
        message: "Please provide a valid url",
      },
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    createdAt: {
      type: Number,
      default: Date.now,
    },
    updatedAt: {
      type: Number,
      default: Date.now,
    },
  },
  { timestamps: true, versionKey: false },
);

// indexing
toolSchema.index({ category: 1, isPopular: -1 });
toolSchema.index({name:1});

// helper func 

toolSchema.pre('save', function(next) {
  this.updatedAt = Date.now(); 
  next(); 
})

toolSchema.statics.findPopular = function() {
  return this.find({popular: 1}).sort({createdAt: -1})
}

toolSchema.statics.findByCategory = function () {
    return this.find({category: true}).sort({createdAt: -1}); 
}

// model  
const Tool = mongoose.model('Tool', toolSchema); 

module.exports = Tool; 

