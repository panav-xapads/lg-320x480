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
			const cta = document.getElementById('lg-cta');
			cta.innerHTML = '';

			anim.src =
				'https://i.postimg.cc/GpgV7F84/water-animation-qt-gif-t.gif';
			setTimeout(() => {
				anim.src =
					'https://i.postimg.cc/05fbHr5p/water-animation-full-glass-1.png';

				cta.innerHTML = `<ul>
					<li>True Preservation</li>
					</ul >`;
				cta.style.left = '64%';

				setTimeout(() => {
					let li = document.createElement('li');
					li.innerText = 'True Maintenance';
					document.querySelector('#lg-cta>ul').appendChild(li);
					setTimeout(() => {
						let li = document.createElement('li');
						li.innerText = 'True Filtration';
						document.querySelector('#lg-cta>ul').appendChild(li);
					}, 1000);
				}, 1000);
			}, 10500);
			const pointer = document.getElementById('left-pointer');
			pointer.style.display = 'none';
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
				<p id='lg-slogan'>
					Explore the perfect blend of health and taste with the LG
					PuriCare True Water Purifier
				</p>
				<img
					onMouseOver={handleImageHover}
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
