import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

export default function Index() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = new Audio('https://dl.dropboxusercontent.com/s/sample-music.mp3');
    audioElement.loop = true;
    audioElement.volume = 0.3;
    setAudio(audioElement);

    return () => {
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(() => {
          console.log('Не удалось воспроизвести музыку');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-sky">
      {/* Главное поздравление */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-8 animate-bounce-gentle">
            🎉 С Днём Рождения! 🎂
          </h1>
          <p className="text-2xl md:text-3xl text-foreground mb-12 font-medium">
            Желаем тебе море счастья и радости!
          </p>
        </div>
      </section>

      {/* Секция с пожеланиями */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Наши пожелания ✨
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-pastel-peach/50 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Счастья</h3>
              <p className="text-foreground/80">
                Пусть каждый день приносит новые поводы для улыбки и радости!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pastel-mint/50 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">💖</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Любви</h3>
              <p className="text-foreground/80">
                Пусть тебя окружают любящие люди и теплые объятия!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pastel-lemon/50 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🌈</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Удачи</h3>
              <p className="text-foreground/80">
                Пусть все твои мечты сбываются, а планы воплощаются в жизнь!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pastel-sky/50 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Успеха</h3>
              <p className="text-foreground/80">
                Пусть твои начинания приводят к невероятным достижениям!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pastel-sage/50 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🌺</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Здоровья</h3>
              <p className="text-foreground/80">
                Пусть твоё здоровье будет крепким, а энергия неиссякаемой!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pastel-cream/50 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Вдохновения</h3>
              <p className="text-foreground/80">
                Пусть творческие идеи наполняют твою жизнь яркими красками!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Галерея милых животных-гифок */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Веселые друзья поздравляют! 🐵🐱
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/80 border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-110">
            <CardContent className="p-0">
              <img 
                src="/img/b041d2be-ff3b-4fab-9912-a9db289b640b.jpg" 
                alt="Танцующая обезьянка"
                className="w-full h-64 object-cover animate-bounce-gentle"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Обезьянка танцует! 🐵</h3>
                <p className="text-foreground/70">Давай празднуем вместе! Танцы до утра! 💃</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-110">
            <CardContent className="p-0">
              <img 
                src="/img/3cdb18e4-b020-4037-ab9c-1808d44d9de0.jpg" 
                alt="Котик с шариками"
                className="w-full h-64 object-cover animate-bounce-gentle"
                style={{animationDelay: '0.5s'}}
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Котик играет! 🐱</h3>
                <p className="text-foreground/70">Милый котёнок принёс шарики для праздника! 🎈</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-110">
            <CardContent className="p-0">
              <img 
                src="/img/68607b5a-4a45-4353-8666-cf4fc8d0acc4.jpg" 
                alt="Обезьянка со свечками"
                className="w-full h-64 object-cover animate-bounce-gentle"
                style={{animationDelay: '1s'}}
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Задувай свечи! 🎂</h3>
                <p className="text-foreground/70">Обезьянка в колпачке готова к торту! 🐵🎉</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Завершающая секция */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="bg-white/90 border-none shadow-xl mx-auto max-w-2xl">
          <CardContent className="p-12">
            <div className="text-8xl mb-6">🎈</div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Пусть этот день запомнится надолго!
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Желаем тебе незабываемых моментов, тёплых встреч и исполнения всех желаний. 
              Ты особенный человек, и этот день должен быть таким же особенным!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="Heart" className="mr-2" size={20} />
                С Любовью! 💕
              </Button>
              <Button 
                onClick={toggleMusic}
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 hover:bg-white"
              >
                <Icon name={isPlaying ? "Pause" : "Play"} className="mr-2" size={20} />
                {isPlaying ? "Пауза" : "Музыка"} 🎵
              </Button>
            </div>
            <p className="text-sm text-foreground/60 mt-4">
              💫 "Все для тебя рассветы и туманы" 💫
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Плавающие элементы */}
      <div className="fixed top-10 left-10 text-4xl animate-bounce-gentle opacity-70">🎂</div>
      <div className="fixed top-20 right-16 text-3xl animate-bounce-gentle opacity-60" style={{animationDelay: '0.5s'}}>🎉</div>
      <div className="fixed bottom-20 left-20 text-5xl animate-bounce-gentle opacity-50" style={{animationDelay: '1s'}}>🎈</div>
      <div className="fixed bottom-16 right-10 text-4xl animate-bounce-gentle opacity-60" style={{animationDelay: '1.5s'}}>✨</div>
    </div>
  );
}