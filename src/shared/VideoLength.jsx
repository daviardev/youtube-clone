import moment from 'moment'

const VideoLength = ({ time }) => {
    const videoLengthSecs = moment()
        ?.startOf('day')
        ?.seconds(time)
        ?.format('H:mm:ss')

    return <>
        <span className='absolute bottom-2 right-2 bg-black py-1 text-white text-xs rounded w-[3rem] text-center opacity-[85%]'>
            { videoLengthSecs }
        </span>
    </>
}

export default VideoLength