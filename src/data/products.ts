export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  gender: 'masculino' | 'feminino' | 'unissex';
  sizes: string[];
  colors: { name: string; hex: string }[];
  isNew?: boolean;
  isPromo?: boolean;
  rating: number;
  reviews: number;
  description: string;
  images: string[];
  collection?: string;
}

export const products: Product[] = [
  {
    id: 1, name: "Camiseta Básica Premium", price: 49.90, originalPrice: 79.90,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    category: "Camisetas", gender: "masculino", sizes: ["P", "M", "G", "GG"],
    colors: [{ name: "Branco", hex: "#FFFFFF" }, { name: "Preto", hex: "#1a1a1a" }, { name: "Vermelho", hex: "#E10600" }],
    isPromo: true, rating: 4.5, reviews: 128,
    description: "Camiseta básica premium feita com algodão de alta qualidade. Perfeita para o dia a dia, com caimento impecável e conforto incomparável.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=700&fit=crop",
    ]
  },
  {
    id: 2, name: "Calça Jeans Slim Fit", price: 129.90,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    category: "Calças", gender: "masculino", sizes: ["38", "40", "42", "44", "46"],
    colors: [{ name: "Azul Escuro", hex: "#1a3a5c" }, { name: "Azul Claro", hex: "#6b8db5" }],
    isNew: true, rating: 4.7, reviews: 95,
    description: "Calça jeans com corte slim fit moderno, tecido com elastano para maior conforto e mobilidade.",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=700&fit=crop",
    ]
  },
  {
    id: 3, name: "Vestido Floral Verão", price: 89.90, originalPrice: 149.90,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
    category: "Vestidos", gender: "feminino", sizes: ["PP", "P", "M", "G"],
    colors: [{ name: "Floral Rosa", hex: "#e8a0b4" }, { name: "Floral Azul", hex: "#7ba4cc" }],
    isPromo: true, rating: 4.8, reviews: 203,
    description: "Vestido floral leve e elegante, perfeito para dias quentes. Tecido fluido com estampa exclusiva.",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=700&fit=crop",
    ]
  },
  {
    id: 4, name: "Jaqueta Corta-Vento", price: 199.90,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    category: "Jaquetas", gender: "unissex", sizes: ["P", "M", "G", "GG"],
    colors: [{ name: "Preto", hex: "#1a1a1a" }, { name: "Vermelho", hex: "#E10600" }],
    isNew: true, rating: 4.6, reviews: 67,
    description: "Jaqueta corta-vento impermeável com design moderno. Ideal para atividades ao ar livre.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1544923246-77307dd270b4?w=600&h=700&fit=crop",
    ]
  },
  {
    id: 5, name: "Blusa Cropped Estampada", price: 59.90,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    category: "Blusas", gender: "feminino", sizes: ["PP", "P", "M", "G"],
    colors: [{ name: "Rosa", hex: "#e8a0b4" }, { name: "Branco", hex: "#FFFFFF" }],
    isNew: true, rating: 4.4, reviews: 89,
    description: "Blusa cropped com estampa moderna e tecido macio. Combina com tudo!",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=700&fit=crop",
    ]
  },
  {
    id: 6, name: "Bermuda Cargo", price: 99.90, originalPrice: 139.90,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop",
    category: "Bermudas", gender: "masculino", sizes: ["38", "40", "42", "44"],
    colors: [{ name: "Cáqui", hex: "#c4a86b" }, { name: "Verde", hex: "#4a6741" }],
    isPromo: true, rating: 4.3, reviews: 56,
    description: "Bermuda cargo com bolsos laterais, estilo urbano e conforto para o verão.",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=700&fit=crop",
    ]
  },
  {
    id: 7, name: "Polo Clássica", price: 79.90,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=500&fit=crop",
    category: "Camisetas", gender: "masculino", sizes: ["P", "M", "G", "GG", "XG"],
    colors: [{ name: "Vermelho", hex: "#E10600" }, { name: "Azul", hex: "#1a3a5c" }, { name: "Branco", hex: "#FFFFFF" }],
    rating: 4.6, reviews: 142,
    description: "Polo clássica com acabamento premium. O básico que nunca sai de moda.",
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=700&fit=crop",
    ]
  },
  {
    id: 8, name: "Saia Midi Plissada", price: 109.90,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop",
    category: "Saias", gender: "feminino", sizes: ["PP", "P", "M", "G"],
    colors: [{ name: "Preto", hex: "#1a1a1a" }, { name: "Bege", hex: "#d4c5a9" }],
    isNew: true, rating: 4.7, reviews: 78,
    description: "Saia midi plissada elegante, versátil para looks do dia a dia ao trabalho.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=700&fit=crop",
    ]
  },
  {
    id: 9, name: "Moletom Oversize", price: 149.90, originalPrice: 199.90,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    category: "Moletons", gender: "unissex", sizes: ["P", "M", "G", "GG"],
    colors: [{ name: "Cinza", hex: "#8c8c8c" }, { name: "Preto", hex: "#1a1a1a" }],
    isPromo: true, rating: 4.9, reviews: 215,
    description: "Moletom oversize ultra confortável com tecido fleece. Peça indispensável no guarda-roupa.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=700&fit=crop",
    ]
  },
  {
    id: 10, name: "Conjunto Fitness", price: 119.90,
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=500&fit=crop",
    category: "Fitness", gender: "feminino", sizes: ["PP", "P", "M", "G"],
    colors: [{ name: "Preto", hex: "#1a1a1a" }, { name: "Rosa", hex: "#e8a0b4" }],
    isNew: true, rating: 4.5, reviews: 93,
    description: "Conjunto fitness com top e legging de alta compressão. Performance e estilo.",
    images: [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=700&fit=crop",
    ]
  },
  {
    id: 11, name: "Camisa Social Slim", price: 139.90,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
    category: "Camisas", gender: "masculino", sizes: ["P", "M", "G", "GG"],
    colors: [{ name: "Branco", hex: "#FFFFFF" }, { name: "Azul Claro", hex: "#b3cce6" }],
    rating: 4.4, reviews: 66,
    description: "Camisa social com corte slim, tecido com tratamento anti-amassado.",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=700&fit=crop",
    ]
  },
  {
    id: 12, name: "Short Jeans Destroyed", price: 69.90, originalPrice: 99.90,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=500&fit=crop",
    category: "Shorts", gender: "feminino", sizes: ["34", "36", "38", "40", "42"],
    colors: [{ name: "Azul Claro", hex: "#8fb8de" }],
    isPromo: true, rating: 4.2, reviews: 104,
    description: "Short jeans destroyed com lavagem clara, estilo jovem e descolado.",
    images: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=700&fit=crop",
    ]
  },
];

export const categories = [
  { name: "Masculino", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop", slug: "masculino" },
  { name: "Feminino", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop", slug: "feminino" },
  { name: "Camisetas", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop", slug: "camisetas" },
  { name: "Calças", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop", slug: "calcas" },
  { name: "Vestidos", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop", slug: "vestidos" },
  { name: "Fitness", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=500&fit=crop", slug: "fitness" },
];

export const stores = [
  { id: 1, name: "Toninho Aqui Modas - Centro", address: "Rua Augusta, 1508 - Centro, São Paulo - SP", phone: "(11) 3456-7890", hours: "Seg a Sáb: 9h às 21h | Dom: 10h às 18h", lat: -23.5505, lng: -46.6333 },
  { id: 2, name: "Toninho Aqui Modas - Shopping Ibirapuera", address: "Av. Ibirapuera, 3103 - Moema, São Paulo - SP", phone: "(11) 3456-7891", hours: "Seg a Sáb: 10h às 22h | Dom: 14h às 20h", lat: -23.6114, lng: -46.6617 },
  { id: 3, name: "Toninho Aqui Modas - Norte Shopping", address: "Av. Dom Hélder Câmara, 5474 - Cachambi, Rio de Janeiro - RJ", phone: "(21) 2345-6789", hours: "Seg a Sáb: 10h às 22h | Dom: 13h às 21h", lat: -22.8815, lng: -43.2772 },
  { id: 4, name: "Toninho Aqui Modas - BH Shopping", address: "BR-040, 1000 - Belvedere, Belo Horizonte - MG", phone: "(31) 3456-7892", hours: "Seg a Sáb: 10h às 22h | Dom: 14h às 20h", lat: -19.9753, lng: -43.9520 },
  { id: 5, name: "Toninho Aqui Modas - Recife", address: "Rua do Bom Jesus, 183 - Recife Antigo, Recife - PE", phone: "(81) 3456-7893", hours: "Seg a Sáb: 9h às 20h | Dom: 10h às 16h", lat: -8.0631, lng: -34.8711 },
];
