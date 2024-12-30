import { notFound } from 'next/navigation'
import Image from 'next/image'
import CommentSection from '@/app/components/comments'

// This data would typically come from a database or API
const blogPosts = [
  { 
    id: 1, 
    title: 'Delicious Pasta Carbonara', 
    slug: 'pasta-carbonara',
    content: 'A classic Italian pasta dish that\'s creamy, savory, and incredibly satisfying.',
    image: '/images/pasta.png?height=600&width=800',
    ingredients: [
      '400g spaghetti',
      '200g pancetta or guanciale, diced',
      '4 large eggs',
      '100g Pecorino Romano cheese, grated',
      '100g Parmigiano-Reggiano cheese, grated',
      'Freshly ground black pepper',
      'Salt'
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook spaghetti according to package instructions.',
      'While pasta is cooking, fry pancetta in a large skillet over medium heat until crispy.',
      'In a bowl, whisk together eggs, grated cheeses, and plenty of black pepper.',
      'Drain pasta, reserving 1 cup of pasta water.',
      'Add hot pasta to the skillet with pancetta, remove from heat.',
      'Quickly stir in the egg and cheese mixture, adding pasta water as needed to create a creamy sauce.',
      'Serve immediately with extra grated cheese and black pepper.'
    ]
  },
  { 
    id: 2, 
    title: 'Homemade Pizza Recipe', 
    slug: 'homemade-pizza',
    content: 'Make the perfect pizza at home with a crispy crust and your favorite toppings.',
    image: '/images/pizza.png?height=600&width=800',
    ingredients: [
      '500g strong bread flour',
      '7g fast-action dried yeast',
      '1 tsp salt',
      '300ml warm water',
      '2 tbsp olive oil',
      '400g canned tomatoes',
      '1 garlic clove, crushed',
      '250g mozzarella cheese',
      'Toppings of your choice'
    ],
    instructions: [
      'Mix flour, yeast, and salt in a bowl. Add water and oil, then knead for 10 minutes.',
      'Let the dough rise in a warm place for 1 hour.',
      'Preheat oven to 220°C (430°F).',
      'Roll out the dough and place on a baking sheet.',
      'Mix tomatoes with crushed garlic and spread over the base.',
      'Add mozzarella and your chosen toppings.',
      'Bake for 15-20 minutes until the crust is golden and cheese is bubbling.'
    ]
  },
  { 
    id: 3, 
    title: 'Chocolate Chip Cookies', 
    slug: 'chocolate-chip-cookies',
    content: 'Classic, chewy cookies loaded with chocolate chips - a timeless favorite!',
    image: '/images/cookies.png?height=600&width=800',
    ingredients: [
      '250g unsalted butter, softened',
      '200g brown sugar',
      '100g granulated sugar',
      '2 large eggs',
      '1 tsp vanilla extract',
      '300g all-purpose flour',
      '1 tsp baking soda',
      '1/2 tsp salt',
      '300g chocolate chips'
    ],
    instructions: [
      'Preheat oven to 190°C (375°F) and line baking sheets with parchment paper.',
      'Cream together butter and sugars until light and fluffy.',
      'Beat in eggs one at a time, then stir in vanilla.',
      'In a separate bowl, whisk together flour, baking soda, and salt.',
      'Gradually mix dry ingredients into the butter mixture.',
      'Stir in chocolate chips.',
      'Drop rounded tablespoons of dough onto prepared baking sheets.',
      'Bake for 9-11 minutes until edges are golden. Cool on baking sheet for 5 minutes before transferring to a wire rack.'
    ]
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="mb-8">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="prose max-w-none mb-8">
        <p className="text-xl mb-4">{post.content}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">Ingredients</h2>
        <ul className="list-disc pl-5 mb-6">
          {post.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Instructions</h2>
        <ol className="list-decimal pl-5 mb-6">
          {post.instructions.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
      <CommentSection postId={post.id} />
    </div>
  )
}

