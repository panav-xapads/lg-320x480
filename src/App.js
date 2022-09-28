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
				cta.style.left = '64%';
			}, 11000);
		}
	};
	return (
		<div className='lg-puricare'>
			<video playsInline autoPlay muted>
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
					src='https://i.ibb.co/6szfffB/water-animation-empty.png'
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
				src='https://i.ibb.co/vmysCT6/22323.png'
				alt=''
			/>
			<img
				className='bubble img2'
				src='https://i.ibb.co/nc6mRPG/22323e.png'
				alt=''
			/>
			<img
				className='bubble img3'
				src='https://i.ibb.co/vmysCT6/22323.png'
				alt=''
			/>
			<img
				className='bubble img4'
				src='https://i.ibb.co/nc6mRPG/22323e.png'
				alt=''
			/>
			<img
				className='bubble img5'
				src='https://i.ibb.co/vmysCT6/22323.png'
				alt=''
			/>
			<img
				className='bubble img6'
				src='https://i.ibb.co/nc6mRPG/22323e.png'
				alt=''
			/>
			<img
				className='bubble img7'
				src='https://i.ibb.co/nc6mRPG/22323e.png'
				alt=''
			/>
			<img
				className='bubble img8'
				src='https://i.ibb.co/vmysCT6/22323.png'
				alt=''
			/>
			<img
				className='bubble img9'
				src='https://i.ibb.co/nc6mRPG/22323e.png'
				alt=''
			/>
			<img
				className='bubble img10'
				src='https://i.ibb.co/vmysCT6/22323.png'
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
