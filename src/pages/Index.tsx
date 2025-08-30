import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface PCComponent {
  id: string;
  type: string;
  name: string;
  price: number;
  image?: string;
}

const Index = () => {
  const [selectedComponents, setSelectedComponents] = useState<PCComponent[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const components: PCComponent[] = [
    { id: '1', type: 'CPU', name: 'Intel Core i7-13700K', price: 45000 },
    { id: '2', type: 'GPU', name: 'RTX 4070 Ti', price: 85000 },
    { id: '3', type: 'RAM', name: 'Corsair Vengeance 32GB', price: 25000 },
    { id: '4', type: 'Storage', name: 'Samsung 980 PRO 1TB', price: 15000 },
    { id: '5', type: 'Motherboard', name: 'ASUS ROG STRIX Z790', price: 35000 },
    { id: '6', type: 'PSU', name: 'Corsair RM850x', price: 18000 }
  ];

  const readyBuilds = [
    {
      name: 'Gaming Beast',
      specs: 'i7-13700K • RTX 4080 • 32GB RAM',
      price: 180000,
      performance: 'Ultra 4K'
    },
    {
      name: 'Streamer Pro',
      specs: 'i9-13900K • RTX 4070 • 64GB RAM',
      price: 220000,
      performance: 'Stream + Game'
    },
    {
      name: 'Budget Gamer',
      specs: 'i5-13400F • RTX 4060 • 16GB RAM',
      price: 95000,
      performance: 'High 1080p'
    }
  ];

  const addComponent = (component: PCComponent) => {
    if (!selectedComponents.find(c => c.type === component.type)) {
      const newComponents = [...selectedComponents, component];
      setSelectedComponents(newComponents);
      setTotalPrice(prev => prev + component.price);
    }
  };

  const removeComponent = (component: PCComponent) => {
    const newComponents = selectedComponents.filter(c => c.id !== component.id);
    setSelectedComponents(newComponents);
    setTotalPrice(prev => prev - component.price);
  };

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-md bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cpu" className="h-8 w-8 text-primary animate-pulse-glow" />
              <h1 className="text-2xl font-orbitron font-bold neon-text">CYBERTECH</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#builder" className="text-foreground hover:text-primary transition-colors">Конструктор</a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#builds" className="text-foreground hover:text-primary transition-colors">Готовые сборки</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            </div>
            <Button className="neon-glow hover:scale-105 transition-transform">
              <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
              Корзина
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-6xl font-orbitron font-bold leading-tight">
                Создай свой
                <span className="block text-primary neon-text">МЕГА ПК</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Конструктор высокопроизводительных компьютеров для геймеров, стримеров и профессионалов. 
                Собери идеальную машину под свои задачи.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="neon-glow hover:scale-105 transition-transform">
                  <Icon name="Zap" className="mr-2 h-5 w-5" />
                  Собрать ПК
                </Button>
                <Button variant="outline" size="lg" className="glass-effect hover:scale-105 transition-transform">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 blur-3xl animate-pulse-glow"></div>
              <img 
                src="/img/4364f835-d8e7-4997-8a4e-4b87b521b567.jpg" 
                alt="Gaming PC" 
                className="relative z-10 w-full h-auto rounded-lg shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PC Builder Section */}
      <section id="builder" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-orbitron font-bold mb-4 neon-text">Конструктор ПК</h2>
            <p className="text-xl text-muted-foreground">Выбери компоненты и собери свой идеальный компьютер</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Components Selection */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {components.map((component) => (
                  <Card key={component.id} className="glass-effect hover:neon-glow transition-all cursor-pointer" onClick={() => addComponent(component)}>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span>{component.name}</span>
                        <Badge variant="outline" className="text-primary border-primary">
                          {component.type}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">₽{component.price.toLocaleString()}</span>
                        <Button size="sm" className="neon-glow">
                          <Icon name="Plus" className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Build Summary */}
            <div className="lg:col-span-1">
              <Card className="glass-effect sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl font-orbitron neon-text">Твоя сборка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedComponents.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">Выбери компоненты для сборки</p>
                  ) : (
                    <>
                      {selectedComponents.map((component) => (
                        <div key={component.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div>
                            <p className="font-medium">{component.name}</p>
                            <p className="text-sm text-muted-foreground">{component.type}</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeComponent(component)}
                          >
                            <Icon name="X" className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <div className="border-t border-border pt-4">
                        <div className="flex items-center justify-between text-2xl font-bold">
                          <span>Итого:</span>
                          <span className="text-primary neon-text">₽{totalPrice.toLocaleString()}</span>
                        </div>
                        <Button className="w-full mt-4 neon-glow hover:scale-105 transition-transform">
                          <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                          Заказать сборку
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ready Builds Section */}
      <section id="builds" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-orbitron font-bold mb-4 neon-text">Готовые сборки</h2>
            <p className="text-xl text-muted-foreground">Проверенные конфигурации для разных задач</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {readyBuilds.map((build, index) => (
              <Card key={index} className="glass-effect hover:neon-glow transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl font-orbitron text-center">{build.name}</CardTitle>
                  <div className="text-center">
                    <Badge className="bg-primary text-primary-foreground">{build.performance}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">{build.specs}</p>
                  <div className="text-3xl font-bold text-primary neon-text">
                    ₽{build.price.toLocaleString()}
                  </div>
                  <Button className="w-full neon-glow">
                    <Icon name="Zap" className="mr-2 h-4 w-4" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-orbitron font-bold mb-4 neon-text">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр услуг для твоего ПК</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Settings', title: 'Сборка ПК', desc: 'Профессиональная сборка любой сложности' },
              { icon: 'Download', title: 'Установка ПО', desc: 'Настройка системы и установка программ' },
              { icon: 'Zap', title: 'Разгон', desc: 'Оптимизация производительности компонентов' },
              { icon: 'Shield', title: 'Гарантия', desc: '2 года гарантии на все услуги' }
            ].map((service, index) => (
              <Card key={index} className="glass-effect text-center hover:neon-glow transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-center">
                    <Icon name={service.icon as any} className="h-12 w-12 text-primary animate-float" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-orbitron font-bold neon-text">О CYBERTECH</h2>
              <p className="text-lg text-muted-foreground">
                Мы — команда энтузиастов высоких технологий, которые создают компьютеры мечты для геймеров, 
                стримеров и профессионалов. Более 5 лет опыта в сфере высокопроизводительных ПК.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-3xl font-bold text-primary neon-text">1000+</div>
                  <div className="text-sm text-muted-foreground">Собранных ПК</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-3xl font-bold text-primary neon-text">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl animate-pulse-glow"></div>
              <Card className="glass-effect relative z-10">
                <CardContent className="p-8 text-center space-y-4">
                  <Icon name="Award" className="h-16 w-16 text-primary mx-auto animate-float" />
                  <h3 className="text-2xl font-orbitron font-bold">Сертифицированные специалисты</h3>
                  <p className="text-muted-foreground">
                    Наша команда имеет официальные сертификаты от Intel, AMD и NVIDIA
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Cpu" className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-orbitron font-bold">CYBERTECH</h3>
              </div>
              <p className="text-muted-foreground">Создаем компьютеры будущего уже сегодня</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Конструктор ПК</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Готовые сборки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Комплектующие</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Сборка ПК</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Настройка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Техподдержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>+7 (999) 123-45-67</li>
                <li>info@cybertech.ru</li>
                <li>Москва, ул. Технологическая, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 CYBERTECH. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;