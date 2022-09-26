import './App.css';

function App() {
	const handleImageHover = () => {
		let anim = document.getElementById('lg-anim');
		if (
			anim.src !==
				'https://i.postimg.cc/GpgV7F84/water-animation-qt-gif-t.gif' &&
			anim.src !==
				'https://i.postimg.cc/05fbHr5p/water-animation-full-glass-1.png'
		) {
			anim.src =
				'https://i.postimg.cc/GpgV7F84/water-animation-qt-gif-t.gif';
			setTimeout(() => {
				anim.src =
					'https://i.postimg.cc/05fbHr5p/water-animation-full-glass-1.png';
			}, 11200);
		}
	};
	return (
		<div className='lg-puricare'>
			<video
				// onEnded={onVideoEnd}
				autoPlay
				muted
				src='https://rr4---sn-npoe7nss.googlevideo.com/videoplayback?expire=1664205749&ei=VW8xY6b5GLi5mLAPlqi48Aw&ip=212.102.49.70&id=o-AFGgpXxF5CtPvuXEeXlYh32ftD9Ja8YIYcIa5mYMmRMg&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&spc=yR2vp3-zBEGEfI6nl1F4wE0mGwyaoqE&vprv=1&mime=video%2Fwebm&ns=UZbZV6lh53NmWZgwSSt7h9cI&gir=yes&clen=4769081&dur=30.000&lmt=1642874773479283&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5535434&n=xg8ldQVqVr1oAg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAI6FZz42hYTNchQ4UjaFJGWNQg1l8r4c041j1dHVBmqHAiEA2eLrIgw5xYt8Cow16Ueh630B_psJzWri2yzEJ-0fcEg%3D&redirect_counter=1&cm2rm=sn-h5qz67l&req_id=8e3651491ab1a3ee&cms_redirect=yes&mh=x-&mip=14.98.155.242&mm=34&mn=sn-npoe7nss&ms=ltu&mt=1664183272&mv=u&mvi=4&pl=24&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgZ1dSSn0rhk-XgzfPsB58eRQOOPOyWcDs9k_-cdfbuyYCIFP506Y44rNnGSGQmx4InAil5gP8tEvIgetFL8JoszGj'
			/>
			<div>
				<p className='lg-slogan'>
					Explore the perfect blend of health and taste with the LG
					PuriCare True Water Purifier
				</p>
				<img
					onMouseOver={handleImageHover}
					src='https://i.ibb.co/6szfffB/water-animation-empty.png'
					alt=''
					id='lg-anim'
				/>
				<p className='lg-cta'>Tap for pure water</p>
				<img
					className='lg-logo'
					src='https://logos-world.net/wp-content/uploads/2020/05/LG-Symbol.png'
					alt=''
				/>
			</div>
			<img
				className='img1'
				src='https://i.ibb.co/vmysCT6/22323.png'
				alt=''
			/>
			<img
				className='img2'
				src='https://i.ibb.co/nc6mRPG/22323e.png'
				alt=''
			/>
			<img
				className='img3'
				src='https://i.ibb.co/vmysCT6/22323.png'
				alt=''
			/>
			<img
				className='img4'
				src='https://i.ibb.co/nc6mRPG/22323e.png'
				alt=''
			/>
			<img
				className='img5'
				src='https://i.ibb.co/vmysCT6/22323.png'
				alt=''
			/>
			<img
				className='img6'
				src='https://i.ibb.co/nc6mRPG/22323e.png'
				alt=''
			/>
		</div>
	);
}

export default App;

// https://ibb.co/sQx5pNd
// https://ibb.co/tsQK3LG
// https://ibb.co/0JTdddt
// https://ibb.co/3ShjkCX
// https://ibb.co/vjwPdpJ
