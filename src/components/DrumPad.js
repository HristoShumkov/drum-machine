const DrumPad = ({ text, src, handleKeyPress, onPlaySoundClick}) => {
   
    return (
            <div className="drum-pad w-[90px] h-[70px] m-[5px] flex justify-center items-center cursor-pointer rounded-lg shadow-[3px_3px_4px_rgba(0,0,0,0.6)] text-4xl bg-[#60a3bc] active:shadow-[inset_3px_3px_5px_rgba(0,0,0,0.5)] active:bg-[#3c6382]" id={`drum-${text}`} onClick={onPlaySoundClick} >
                {text}
                <audio src={src} className="clip" id={text} onKeyDown={handleKeyPress}/>
            </div>
    )
}

export default DrumPad
