import './App.css';
import video from './lg-purifier video.webm';
import videomp4 from './lg-purifier video.mp4';

function App() {
	const handleImageHover = () => {
		let anim = document.getElementById('lg-anim');
		let gif =
			'https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/water-animation-fill-single.gif';

		if (anim.src !== gif) {
			anim.src = gif;

			const cta = document.getElementById('lg-cta');
			const pointer = document.getElementById('left-pointer');

			cta.innerHTML = '';
			pointer.style.display = 'none';

			setTimeout(() => {
				cta.innerHTML = `<ul>
					<li>True Preservation</li>
					<li>True Maintenance</li>
					<li>True Filtration</li>
					</ul >`;
				cta.style.left = '59%';
			}, 11000);
		}
	};
	return (
		<div className='lg-puricare'>
			<video id='lg-bg-vid' playsInline autoPlay muted>
				<source src={videomp4} type='video/mp4' />
				<source src={video} type='video/webm' />
			</video>
			<video id='lg-fg-vid' playsInline autoPlay muted>
				<source src={videomp4} type='video/mp4' />
				<source src={video} type='video/webm' />
			</video>
			<div>
				<p id='lg-slogan'>
					Explore the perfect blend of health and taste with the LG
					Water Purifier
				</p>
				<img
					onClick={handleImageHover}
					src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/water%20animation%20empty.png'
					alt=''
					id='lg-anim'
				/>
				<img
					id='left-pointer'
					src='https://c.tenor.com/CgfsuqBAjfwAAAAi/pointing-left-joypixels.gif'
					alt=''
				/>
				<p id='lg-cta'>Tap for pure water</p>
				<img
					id='lg-logo'
					src='https://logos-world.net/wp-content/uploads/2020/05/LG-Symbol.png'
					alt=''
				/>
			</div>
			<img
				className='bubble img1'
				src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323.png'
				alt=''
			/>
			<img
				className='bubble img2'
				src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323e.png'
				alt=''
			/>
			<img
				className='bubble img3'
				src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323.png'
				alt=''
			/>
			<img
				className='bubble img4'
				src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323e.png'
				alt=''
			/>
			<img
				className='bubble img5'
				src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323.png'
				alt=''
			/>
			<img
				className='bubble img6'
				src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323e.png'
				alt=''
			/>
			<img
				className='bubble img7'
				src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323e.png'
				alt=''
			/>
			<img
				className='bubble img8'
				src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323.png'
				alt=''
			/>
			<img
				className='bubble img9'
				src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323e.png'
				alt=''
			/>
			<img
				className='bubble img10'
				src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323.png'
				alt=''
			/>
		</div>
	);
}

export default App;
