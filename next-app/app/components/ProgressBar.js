function percentageToHourPercentage(percentage) {
    // Convert the percentage to a decimal.
    const decimalPercentage = percentage / 100;

    // Calculate the percentage of an hour.
    const hourPercentage = decimalPercentage * 60;

    // Return the percentage of an hour.
    return hourPercentage;
}

const ProgressBar = ({ progress }) => {
    if (progress == 100) {
        return (
            <div className="completion-bar mb-3">
                <div className='flex justify-between items-center'>
                    <p className='text-[10px] font-bold'>{progress}%</p>
                    <p className='text-[10px] font-bold'>1 hour<span className='text-gray-400'> / 1 hour</span></p>
                </div>
                <div className="relative w-full h-2.5 bg-lulu-200 rounded-lg">
                    <div
                        className="absolute top-0 left-0 bg-lulu-100 h-2.5 rounded-lg"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        )
    }
    return (
        <div className="completion-bar mb-3">
            <div className='flex justify-between items-center'>
                <p className='text-[10px] font-bold'>{progress}%</p>
                <p className='text-[10px] font-bold'>{percentageToHourPercentage(progress) + " min"}<span className='text-gray-400'> / 1 hour</span></p>
            </div>
            <div className="relative w-full h-2.5 bg-lulu-200 rounded-lg">
                <div
                    className="absolute top-0 left-0 bg-lulu-100 h-2.5 rounded-lg"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;