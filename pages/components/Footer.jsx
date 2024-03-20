import React from 'react';

const Footer = () => {
    return(
        <footer className='flex flex-row justify-between text-white bg-black ml-[-1%] pl-[2%] mb-[-1%] mr-[-0.5%]'>
            <div className='flex max-[640px]:flex-wrap max-[640px]:flex-wrap  max-[640px]:flex-col-reverse ' >
            <div>
                <div className='col-row'>
                    <h3 className='bg-gradient-to-r from-yellow-300 to-red-700 bg-clip-text text-transparent'>Lien Utile</h3>
                    <ul>
                        <li><a className='list-none text-white no-underline' href="https://uicolors.app/create">Color Generator</a></li>
                        <li><a className='list-none text-white no-underline' href="https://animista.net/">Animasta</a></li>
                        <li><a className='list-none text-white no-underline' href="https://www.canva.com/">Canva</a></li>
                        <li><a className='list-none text-white no-underline' href="https://fontawesome.com/">FontAwesome</a></li>
                        <li><a className='list-none text-white no-underline' href="https://www.svgrepo.com/">SvGPro</a></li>
                    </ul>
                    <p>© Portfolio de Alexandre De Roeck 2024</p>
                </div>
            </div>

            <div>
                <div className='col-row'>
                    <h3  className='bg-gradient-to-r from-yellow-300 to-red-700 bg-clip-text text-transparent'>Lien Utile</h3>
                    <ul>
                        <li><a className='list-none text-white no-underline' href="https://www.figma.com">Figma</a></li>
                        <li><a className='list-none text-white no-underline' href="https://www.w3schools.com/">W3schools</a></li>
                        <li><a className='list-none text-white no-underline' href="https://validator.w3.org/">W3C Validator</a></li>
                        <li><a className='list-none text-white no-underline' href="https://github.com/">Github</a></li>
                        <li><a className='list-none text-white no-underline' href="https://vercel.com/">Vercel</a></li>
                    </ul>
                </div>
            </div>
            <div>
            <div className='col-row'>
                    <h3  className='bg-gradient-to-r from-yellow-300 to-red-700 bg-clip-text text-transparent'>Lien Utile</h3>
                    <ul>
                        <li><a className='list-none text-white no-underline' href="https://uiverse.io">Uiverse</a></li>
                        <li><a className='list-none text-white no-underline' href="https://codepen.io/">Code Pen</a></li>
                        <li><a className='list-none text-white no-underline' href="https://www.skeleton.dev/">Skeleton dev</a></li>
                        <li><a className='list-none text-white no-underline' href="https://jsben.ch/">JSBench</a></li>
                        <li><a className='list-none text-white no-underline' href="https://www.minifier.org/">Minifier code</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
    )
}

export const getStaticProps = async () => {
    return {
      props: {}, // Return an empty object since there's no dynamic data
      revalidate: 3600 // Add revalidation time if needed
    };
  };
  
export default Footer;