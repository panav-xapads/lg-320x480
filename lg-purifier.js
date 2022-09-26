const iframe = document.createElement('iframe');
iframe.id = 'xpdIframe';
iframe.src = 'http://localhost:3000/';
document.getElementById('XPDadDiv').appendChild(iframe);

const styles = document.createElement('style');
styles.innerHTML = `
#XPDadDiv {
    padding-bottom: 67%;
	height: 0;
	position: relative;
    margin-bottom: 1rem;
	overflow: hidden;
}
#xpdIframe {
    top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
}
#xpdIframe::-webkit-scrollbar {
    display: none;
}
`;
document.body.appendChild(styles);
