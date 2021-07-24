const mongoose = required("mongoose")

const categorySchema = new mongoose.schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    }
},
 {timestamps: true}

);

module.exports = mongoose.model("Category", categorySchema);