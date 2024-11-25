import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
	return (
		<Link
			href='/'
			className='relative'
		>
			<Image
				src='/Eco_Logo.png'
				alt='Explore your image'
				width={500}
				height={500}
				className='w-20 h-20 lg:h-20'
				priority
			/>
		</Link>
	);
};

export default Logo;
