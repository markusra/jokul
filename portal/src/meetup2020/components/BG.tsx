import React, { useRef, useEffect, useContext } from "react";

import { a11yContext } from "../../contexts/a11yContext";
import "./Bakgrunnsvideo.scss";

interface Props {
    videoSrc: string;
    videoWebmSrc?: string;
    posterImgSrc?: string;
}

export function Bakgrunnsvideo({ videoSrc, videoWebmSrc, posterImgSrc }: Props) {
    const { prefersReducedMotion } = useContext(a11yContext);
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (prefersReducedMotion) {
            videoRef.current?.pause();
        }
    }, [prefersReducedMotion]);

    return (
        <div className="bfl-bakgrunnsvideo">
            <video
                ref={videoRef}
                className="bfl-bakgrunnsvideo__video"
                muted
                autoPlay={!prefersReducedMotion}
                poster={posterImgSrc}
                tabIndex={-1}
            >
                {videoWebmSrc && <source src={videoWebmSrc} type="video/webm" />}
                <source src={videoSrc} type="video/mp4" />
                {posterImgSrc && (
                    <img className="bfl-bakgrunnsvideo__fallback" alt="" role="presentation" src={posterImgSrc} />
                )}
            </video>
        </div>
    );
}
