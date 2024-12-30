import Link from 'next/link';
import Image from 'next/image';

// This data would typically come from a database or API
const blogPosts = [
  { 
    id: 1, 
    title: 'Ras Malai', 
    slug: 'ras-malai',
    description: 'A rich and creamy Indian dessert made with soft cheese dumplings.',
    image: '/images/raas.png?height=300&width=400'
  },
  { 
    id: 2, 
    title: 'Chocolate Chip Cookies', 
    slug: 'chocolate-chip-cookies',
    description: 'Classic, chewy cookies loaded with chocolate chips.',
    image: '/images/cookies.png?height=300&width=400'
  },
  { 
    id: 3, 
    title: 'Tiramisu', 
    slug: 'tiramisu',
    description: 'An elegant Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
    image: '/images/Tiramisu.png?height=300&width=400'
  },
  { 
    id: 4, 
    title: 'Gulab Jamun', 
    slug: 'gulab-jamun',
    description: 'Deep-fried milk solids soaked in fragrant sugar syrup.',
    image: '/images/gulaab.png?height=300&width=400'
  },
  { 
    id: 5, 
    title: 'Crème Brûlée', 
    slug: 'creme-brulee',
    description: 'A classic French dessert with a rich custard base and a caramelized sugar topping.',
    image: '/images/creme-brulee.png?height=300&width=400'
  },
  { 
    id: 6, 
    title: 'Chicken Biryani', 
    slug: 'chicken-biryani',
    description: 'A fragrant and flavorful Indian rice dish with tender chicken.',
    image: '/images/biryani.png?height=300&width=400'
  },
  { 
    id: 7, 
    title: 'Pizza Fries', 
    slug: 'pizza-fries',
    description: 'Crispy fries topped with pizza sauce, cheese, and your favorite toppings.',
    image: '/images/fries.png?height=300&width=400'
  },
  {
    id: 8, 
    title: 'Delicious Pasta Carbonara', 
    slug: 'pasta-carbonara',
    content: 'A classic Italian pasta dish that\'s creamy, savory, and incredibly satisfying.',
    image: '/images/pasta.png?height=600&width=800',
  },
  { 
    id: 9, 
    title: 'Chinese Fried Rice', 
    slug: 'chinese-fried-rice',
    description: 'A quick and delicious stir-fried rice with vegetables and eggs.',
    image: '/images/chinese-rice.png?height=300&width=400'
  },
  {
    id: 10, 
    title: 'Homemade Pizza Recipe', 
    slug: 'homemade-pizza',
    content: 'Make the perfect pizza at home with a crispy crust and your favorite toppings.',
    image: '/images/pizza.png?height=600&width=800',
  },
  {
    id: 11, 
    title: 'Keema Curry', 
    slug: 'keema-curry',
    content: 'A spicy and flavorful minced meat curry popular in South Asian cuisine.',
    image: '/images/kurry.png?height=600&width=800',
  },
  {
    id: 12, 
    title: 'Mango Lassi', 
    slug: 'mango-lassi',
    content: 'A refreshing Indian yogurt-based drink with sweet mangoes, perfect for hot summer days.',
    image: '/images/mango.png?height=600&width=800',
  },
  {
    id: 13, 
    title: 'Beef Stroganoff', 
    slug: 'beef-stroganoff',
    content: 'A creamy Russian dish with tender beef and mushrooms served over noodles, perfect for a comforting dinner.',
    image: '/images/Beef.png?height=600&width=800',
  },
  {
    id: 14, 
    title: 'Caprese Salad', 
    slug: 'caprese-salad',
    content: 'A simple and elegant Italian salad that showcases the colors of the Italian flag with fresh mozzarella, tomatoes, and basil.',
    image: '/images/salad.png?height=600&width=800',
  },
  {
    id: 15, 
    title: 'Lemon Meringue Pie', 
    slug: 'lemon-meringue-pie',
    content: 'A classic dessert featuring a buttery crust, tangy lemon filling, and a fluffy meringue topping.',
    image: '/images/Lemon.png?height=600&width=800',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8"></h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <li key={post.id} className="bg-white shadow rounded-lg overflow-hidden">
            <Link href={`/posts/${post.slug}`}>
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">{post.title}</h2>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
