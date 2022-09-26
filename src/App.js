import './App.css';
import video from './lg-purifier video.webm';

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
				muted>
				<source src={video} />
			</video>
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
