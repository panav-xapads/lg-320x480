const iframe = document.createElement('iframe');
iframe.id = 'xpdIframe';
iframe.src = 'https://subtle-unicorn-221dfe.netlify.app?v=1';
document.getElementById('xpd-ad-react-lg-001').appendChild(iframe);

const styles = document.createElement('style');
styles.innerHTML = `
#xpd-ad-react-lg-001 {
    padding-bottom:71%;
	height: 0;
	position: relative;
    margin-bottom: 1rem;
	overflow: hidden;
}
#xpd-ad-react-lg-001 > #xpdIframe {
    top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: 0px;
	position: absolute;
	overflow: hidden;
}
#xpdIframe::-webkit-scrollbar {
    display: none;
}
`;
document.body.appendChild(styles);
