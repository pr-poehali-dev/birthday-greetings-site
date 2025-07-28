import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
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

      {/* Галерея милых животных */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Милые друзья шлют привет! 🐾
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/80 border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <img 
                src="/img/85cb8d28-00a2-49aa-a54f-4230815df490.jpg" 
                alt="Милая капибара"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Капибара 🐹</h3>
                <p className="text-foreground/70">Спокойствие и гармония в твой день!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <img 
                src="/img/00871be6-5003-4621-badc-79157dd03d78.jpg" 
                alt="Милая обезьянка"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Обезьянка 🐵</h3>
                <p className="text-foreground/70">Игривость и веселье с тобой!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <img 
                src="/img/008e4d2c-b91c-4e9f-b49f-567e55b7887c.jpg" 
                alt="Милый котик"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Котик 🐱</h3>
                <p className="text-foreground/70">Уют и тепло в твоём доме!</p>
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
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="Heart" className="mr-2" size={20} />
              С Любовью! 💕
            </Button>
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