import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fallbackFacebookPosts } from '../data/siteData';
import { truncateText } from '../lib/utils';
import Card from './Card';

type FacebookPost = {
  id: string;
  message?: string;
  created_time: string;
  permalink_url: string;
  full_picture?: string;
};

const FacebookUpdates = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const loadPosts = async () => {
      setLoading(true);
      const pageId = import.meta.env.VITE_FACEBOOK_PAGE_ID;
      const accessToken = import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;

      if (!pageId || !accessToken) {
        setPosts(fallbackFacebookPosts);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.facebook.com/v19.0/${pageId}/posts?fields=message,created_time,full_picture,permalink_url&limit=5&access_token=${accessToken}`
        );
        const payload = (await response.json()) as { data?: FacebookPost[] };
        setPosts(payload.data?.slice(0, 5) ?? fallbackFacebookPosts);
      } catch {
        setPosts(fallbackFacebookPosts);
      } finally {
        setLoading(false);
      }
    };

    void loadPosts();
  }, [isVisible]);

  const visiblePosts = useMemo(() => posts.slice(0, 5), [posts]);

  return (
    <section ref={sectionRef}>
      <h2 className="text-2xl font-bold text-brand-darkText md:text-3xl">{t('home.facebookTitle')}</h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="animate-pulse">
                <div className="h-40 rounded-lg bg-red-100" />
                <div className="mt-3 h-4 rounded bg-red-100" />
                <div className="mt-2 h-4 w-4/5 rounded bg-red-100" />
              </Card>
            ))
          : visiblePosts.map((post) => (
              <Card key={post.id} className="flex h-full flex-col">
                <img
                  src={post.full_picture ?? 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80'}
                  alt={t('facebook.imageAlt')}
                  loading="lazy"
                  className="h-40 w-full rounded-lg object-cover"
                />
                <p className="mt-3 text-xs font-semibold uppercase text-brand-secondaryText">{post.created_time}</p>
                <p className="mt-2 flex-1 text-sm text-brand-darkText">{truncateText(post.message ?? '', 110)}</p>
                <a
                  href={post.permalink_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-fit rounded-md bg-brand-primary px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  {t('common.viewOnFacebook')}
                </a>
              </Card>
            ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-red-100 bg-white p-3">
        <iframe
          title={t('facebook.iframeTitle')}
          loading="lazy"
          className="h-72 w-full rounded-lg"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false"
        />
      </div>
    </section>
  );
};

export default FacebookUpdates;
