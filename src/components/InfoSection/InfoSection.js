import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
	InfoSec,
	InfoRow,
	InfoCollum,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
} from "./InfoSection.elements";

const InfoSection = ({
	primary,
	lightBg,
	imgStart,
	lightTopLine,
	lightText,
	lightTextDesc,
	description,
	buttonLabel,
	headline,
	topline,
	img,
	alt,
	start,
}) => {
	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoCollum>
							<TextWrapper>
								<TopLine lightTopLine={lightTopLine}>{topline}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
								<Link to='/sing-up'>
									<Button big FontBig primary={primary}>
										{buttonLabel}
									</Button>
								</Link>
							</TextWrapper>
						</InfoCollum>
						<InfoCollum>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</InfoCollum>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default InfoSection;
