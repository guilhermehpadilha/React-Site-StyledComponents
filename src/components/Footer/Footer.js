import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
	FooterConteiner,
	FooterSubHeading,
	FooterSubText,
	FooterSubscription,
	Form,
	FormInput,
	FooterLinksConteiner,
	FooterLinksWrapper,
	FooterLinksItens,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcon,
	SocialIcons,
	SocialIconLink,
} from "./Footer.elements";

const footer = () => {
	return (
		<FooterConteiner>
			<FooterSubscription>
				<FooterSubHeading>
					Join our exclusive membership to receive the latest news and trends
				</FooterSubHeading>
				<FooterSubText>You can unsubscribe at any time.</FooterSubText>
				<Form>
					<FormInput name='email' type='email' placeholder='Your Email' />
					<Button fontBig>Subscribe</Button>
				</Form>
			</FooterSubscription>
			<FooterLinksConteiner>
				<FooterLinksWrapper>
					<FooterLinksItens>
						<FooterLinkTitle>About Us</FooterLinkTitle>
						<FooterLink to='/sing-up'>How its work</FooterLink>
						<FooterLink to='/'>Testemonias</FooterLink>
						<FooterLink to='/'>Careers</FooterLink>
						<FooterLink to='/'>Investors</FooterLink>
						<FooterLink to='/'>Terms of Service</FooterLink>
					</FooterLinksItens>
					<FooterLinksItens>
						<FooterLinkTitle>Contact Us</FooterLinkTitle>
						<FooterLink to='/sing-up'>How its work</FooterLink>
						<FooterLink to='/'>Testemonias</FooterLink>
						<FooterLink to='/'>Careers</FooterLink>
						<FooterLink to='/'>Investors</FooterLink>
						<FooterLink to='/'>Terms of Service</FooterLink>
					</FooterLinksItens>
				</FooterLinksWrapper>
				<FooterLinksWrapper>
					<FooterLinksItens>
						<FooterLinkTitle>Videos</FooterLinkTitle>
						<FooterLink to='/sing-up'>How its work</FooterLink>
						<FooterLink to='/'>Testemonias</FooterLink>
						<FooterLink to='/'>Careers</FooterLink>
						<FooterLink to='/'>Investors</FooterLink>
						<FooterLink to='/'>Terms of Service</FooterLink>
					</FooterLinksItens>
					<FooterLinksItens>
						<FooterLinkTitle>Social Media</FooterLinkTitle>
						<FooterLink to='/sing-up'>How its work</FooterLink>
						<FooterLink to='/'>Testemonias</FooterLink>
						<FooterLink to='/'>Careers</FooterLink>
						<FooterLink to='/'>Investors</FooterLink>
						<FooterLink to='/'>Terms of Service</FooterLink>
					</FooterLinksItens>
				</FooterLinksWrapper>
			</FooterLinksConteiner>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to='/'>
						<SocialIcon />
						ULTRA
					</SocialLogo>
					<WebsiteRights>ULTRA © 2021</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href='/' target='_blank' aria-label='Facebook'>
							<FaFacebook />
						</SocialIconLink>

						<SocialIconLink href='/' target='_blank' aria-label='Twitter'>
							<FaTwitter />
						</SocialIconLink>

						<SocialIconLink href='/' target='_blank' aria-label='Instragram'>
							<FaInstagram />
						</SocialIconLink>

						<SocialIconLink
							href='/'
							target='_blank'
							aria-label='Youtube'
							rel='nooponer noreferer'
						>
							<FaYoutube />
						</SocialIconLink>

						<SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
							<FaLinkedin />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterConteiner>
	);
};

export default footer;
