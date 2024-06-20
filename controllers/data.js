const Data = require('../models/data')
const asyncHandler = require('express-async-handler');

const createData = asyncHandler(async (req, res) => {
    if (Object.keys(req.body).length === 0) throw new Error('Missing input');

    const newData = await Data.create({ ...req.body });
    return res.status(200).json({
        success: newData ? true : false,
        createdData: newData ? newData : 'Cannot create new Data'
    });
});

const getDataByUserId = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({ success: false, error: 'Missing user id' });
    }

    const datas = await Data.find({ user: userId });
    return res.status(200).json({
        success: datas ? true : false,
        datas: datas ? datas : 'Cannot get datas for this user'
    });
});

const deleteData = asyncHandler(async (req, res) => {
    const { dataId } = req.params;

    try {
        const deletedData = await Data.findOneAndDelete({ _id: dataId });

        return res.status(200).json({
            success: deletedData ? true : false,
            deletedData: deletedData ? deletedData : 'Cannot delete Data'
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message
        });
    }
});



module.exports = {
    createData,
    getDataByUserId,
    deleteData
};