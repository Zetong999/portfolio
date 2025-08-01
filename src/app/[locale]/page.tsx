import Home from '@/components/home';
import { getBlogForHome } from '@/graphqlApi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {getTranslations} from 'next-intl/server';

export default async function HomePage() {
  const PostsData = await getBlogForHome()

   const t = await getTranslations('HomePage');


  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

      <p className="mb-6 italic">
        {t('about')}
      </p>

      <div className="space-x-4">
        <a
          href="https://github.com/Zetong999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-black font-bold hover:bg-gray-100 rounded-none"
        >
          {t('buttons.github')}
          <FaGithub className="ml-2" /> {/* logo 在文字后面 */}
        </a>

        <a
          href="https://www.linkedin.com/in/zetong-liu-237216266"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-black font-bold hover:bg-gray-100 rounded-none"
        >
            {t('buttons.linkedIn')}
          <FaLinkedin className="ml-2" /> {/* logo 在文字后面 */}
        </a>
      </div>
      <Home blogData={PostsData}/>
    </div>
  );
}
