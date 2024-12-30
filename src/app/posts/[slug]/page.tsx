import { notFound } from 'next/navigation'
import Image from 'next/image'
import CommentSection from '@/app/components/comments'

// This data would typically come from a database or API
const blogPosts = [
  { 
    id: 1, 
    title: 'Ras Malai', 
    slug: 'ras-malai',
    content: 'A rich and creamy Indian dessert made with soft cheese dumplings in sweetened, cardamom-flavored milk.',
    image: '/images/raas.png?height=600&width=800',
    ingredients: [
      '1 liter full-fat milk',
      '1/4 cup lemon juice',
      '1/2 cup sugar',
      '2 cups water',
      '1/4 tsp cardamom powder',
      '2 tbsp chopped pistachios',
      'Few strands of saffron',
      '1 tbsp rose water (optional)'
    ],
    instructions: [
      'Bring the milk to a boil, then add lemon juice to curdle it.',
      'Strain the curdled milk through a cheesecloth and rinse with cold water.',
      'Squeeze out excess water and knead the cheese into a smooth dough.',
      'Divide the dough into small balls and flatten slightly.',
      'In a pan, mix sugar and water. Bring to a boil and add the cheese balls.',
      'Cook for 10 minutes, then remove the balls and set aside.',
      'In another pan, reduce 2 cups of milk until slightly thickened.',
      'Add cardamom powder, saffron, and rose water to the milk.',
      'Add the cooked cheese balls to this milk and chill for a few hours.',
      'Garnish with chopped pistachios before serving.'
    ]
  },
  { 
    id: 2, 
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
  { 
    id: 3, 
    title: 'Tiramisu', 
    slug: 'tiramisu',
    content: 'An elegant Italian dessert with layers of coffee-soaked ladyfingers and creamy mascarpone filling.',
    image: '/images/Tiramisu.png?height=600&width=800',
    ingredients: [
      '500g mascarpone cheese',
      '4 eggs, separated',
      '100g sugar',
      '300ml strong coffee, cooled',
      '200g ladyfinger biscuits',
      '2 tbsp cocoa powder',
      '50ml Marsala wine (optional)'
    ],
    instructions: [
      'Beat egg yolks with sugar until pale and creamy.',
      'Add mascarpone and mix until smooth.',
      'In a separate bowl, whip egg whites until stiff peaks form.',
      'Gently fold the egg whites into the mascarpone mixture.',
      'Mix coffee with Marsala wine if using.',
      'Quickly dip ladyfingers in the coffee mixture and layer in a dish.',
      'Spread half of the mascarpone mixture over the ladyfingers.',
      'Repeat with another layer of coffee-dipped ladyfingers and mascarpone.',
      'Dust the top generously with cocoa powder.',
      'Refrigerate for at least 4 hours or overnight before serving.'
    ]
  },
  { 
    id: 4, 
    title: 'Gulab Jamun', 
    slug: 'gulab-jamun',
    content: 'A popular Indian dessert of deep-fried milk solids soaked in fragrant sugar syrup.',
    image: '/images/gulaab.png?height=600&width=800',
    ingredients: [
      '1 cup milk powder',
      '1/4 cup all-purpose flour',
      '1/4 tsp baking soda',
      '2 tbsp ghee (clarified butter)',
      'Milk for kneading',
      '2 cups sugar',
      '2 cups water',
      '4 cardamom pods, crushed',
      '1 tsp rose water',
      'Oil for deep frying'
    ],
    instructions: [
      'Mix milk powder, flour, and baking soda. Add ghee and knead into a soft dough using milk.',
      'Shape the dough into small, smooth balls.',
      'Heat oil in a deep pan and fry the balls until golden brown.',
      'In another pan, mix sugar and water. Bring to a boil and add cardamom pods.',
      'Simmer the syrup for 5 minutes, then add rose water.',
      'Drop the fried balls into the warm syrup and let soak for at least 30 minutes.',
      'Serve warm or at room temperature.'
    ]
  },
  { 
    id: 5, 
    title: 'Crème Brûlée', 
    slug: 'creme-brulee',
    content: 'A classic French dessert with a rich custard base and a caramelized sugar topping.',
    image: '/images/creme-brulee.png?height=600&width=800',
    ingredients: [
      '2 cups heavy cream',
      '1 vanilla bean, split and scraped',
      '1/4 cup sugar',
      '4 egg yolks',
      'Extra sugar for topping'
    ],
    instructions: [
      'Preheat oven to 300°F (150°C).',
      'In a saucepan, heat cream with vanilla bean and seeds until it just begins to simmer.',
      'In a bowl, whisk together sugar and egg yolks.',
      'Slowly whisk the hot cream into the egg mixture.',
      'Strain the mixture and pour into ramekins.',
      'Place ramekins in a water bath and bake for 30-35 minutes until set but still jiggly.',
      'Chill for at least 2 hours or overnight.',
      'Before serving, sprinkle sugar on top and caramelize with a kitchen torch or under the broiler.'
    ]
  },
  { 
    id: 6, 
    title: 'Chicken Biryani', 
    slug: 'chicken-biryani',
    content: 'A fragrant and flavorful Indian rice dish with tender chicken, aromatic spices, and caramelized onions.',
    image: '/images/biryani.png?height=600&width=800',
    ingredients: [
      '500g basmati rice',
      '500g chicken, cut into pieces',
      '2 large onions, sliced',
      '2 tbsp ginger-garlic paste',
      '2 tomatoes, chopped',
      '1/2 cup yogurt',
      '4 tbsp biryani masala',
      '1/4 cup vegetable oil',
      'Salt to taste',
      'Coriander leaves for garnish'
    ],
    instructions: [
      'Marinate the chicken with yogurt, half of the biryani masala, and salt for 1 hour.',
      'Soak the rice for 30 minutes, then parboil it and set aside.',
      'In a large pot, fry the sliced onions until golden brown.',
      'Add ginger-garlic paste and sauté for 2 minutes.',
      'Add marinated chicken and cook until it nearly done.',
      'Layer the parboiled rice over the chicken.',
      'Sprinkle the remaining biryani masala and add some fried onions.',
      'Cover and cook on low heat for 20-25 minutes.',
      'Garnish with coriander leaves and serve hot.'
    ]
  },
  { 
    id: 7, 
    title: 'Pizza Fries', 
    slug: 'pizza-fries',
    content: 'A fun twist on two favorite foods - crispy fries topped with all the goodness of pizza!',
    image: '/images/fries.png?height=600&width=800',
    ingredients: [
      '500g frozen french fries',
      '1 cup pizza sauce',
      '2 cups shredded mozzarella cheese',
      '100g pepperoni slices',
      '1/4 cup sliced black olives',
      '1/4 cup sliced bell peppers',
      '1 tsp dried oregano',
      'Fresh basil leaves for garnish'
    ],
    instructions: [
      'Preheat oven to 220°C (425°F).',
      'Spread frozen fries on a baking sheet and bake according to package instructions until crispy.',
      'Remove fries from oven and top with pizza sauce, spreading evenly.',
      'Sprinkle generously with mozzarella cheese.',
      'Add pepperoni, olives, and bell peppers.',
      'Return to oven and bake for 10-15 minutes until cheese is melted and bubbly.',
      'Sprinkle with dried oregano and garnish with fresh basil leaves.',
      'Serve hot and enjoy your pizza fries!'
    ]
  },
  { 
    id: 8, 
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
    id: 9, 
    title: 'Chinese Fried Rice', 
    slug: 'chinese-fried-rice',
    content: 'A quick and delicious stir-fried rice dish packed with vegetables and savory flavors.',
    image: '/images/fries.png?height=600&width=800',
    ingredients: [
      '3 cups cooked and cooled rice',
      '2 eggs, beaten',
      '1 cup mixed vegetables (peas, carrots, corn)',
      '1/2 cup diced onions',
      '2 cloves garlic, minced',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '2 tbsp vegetable oil',
      '2 green onions, chopped',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat vegetable oil in a large wok or skillet over medium-high heat.',
      'Add beaten eggs and scramble until cooked. Remove and set aside.',
      'In the same wok, sauté onions and garlic until fragrant.',
      'Add mixed vegetables and stir-fry for 2-3 minutes.',
      'Add the cooked rice and stir to combine, breaking up any clumps.',
      'Pour in soy sauce and sesame oil, stirring to distribute evenly.',
      'Add the scrambled eggs back to the wok and mix well.',
      'Season with salt and pepper to taste.',
      'Garnish with chopped green onions and serve hot.'
    ]
  },
  { 
    id: 10, 
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
    id: 11, 
    title: 'Keema Curry', 
    slug: 'keema-curry',
    content: 'A spicy and flavorful minced meat curry popular in South Asian cuisine.',
    image: '/images/kurry.png?height=600&width=800',
    ingredients: [
      '500g minced lamb or beef',
      '2 onions, finely chopped',
      '2 tomatoes, chopped',
      '2 tbsp ginger-garlic paste',
      '2 green chilies, chopped',
      '2 tsp cumin powder',
      '2 tsp coriander powder',
      '1 tsp turmeric powder',
      '1 tsp garam masala',
      '2 tbsp vegetable oil',
      'Salt to taste',
      'Fresh coriander leaves for garnish'
    ],
    instructions: [
      'Heat oil in a large pan over medium heat.',
      'Add chopped onions and sauté until golden brown.',
      'Add ginger-garlic paste and green chilies. Cook for 2 minutes.',
      'Add the minced meat and cook until it changes color.',
      'Stir in cumin, coriander, turmeric, and salt. Cook for 5 minutes.',
      'Add chopped tomatoes and cook until they soften and oil separates.',
      'Add 1/2 cup water, cover, and simmer for 15-20 minutes.',
      'Sprinkle garam masala and cook for another 5 minutes.',
      'Garnish with fresh coriander leaves and serve hot with naan or rice.'
    ]
  },
  { 
    id: 12, 
    title: 'Mango Lassi', 
    slug: 'mango-lassi',
    content: 'A refreshing Indian yogurt-based drink with sweet mangoes, perfect for hot summer days.',
    image: '/images/mango.png?height=600&width=800',
    ingredients: [
      '2 ripe mangoes, peeled and chopped',
      '1 cup plain yogurt',
      '1/2 cup milk',
      '2 tbsp sugar (adjust to taste)',
      '1/2 tsp cardamom powder',
      'Ice cubes',
      'Mint leaves for garnish'
    ],
    instructions: [
      'Add chopped mangoes, yogurt, milk, sugar, and cardamom powder to a blender.',
      'Blend until smooth and creamy.',
      'Taste and adjust sweetness if needed.',
      'Add ice cubes and blend again until frothy.',
      'Pour into glasses and garnish with mint leaves.',
      'Serve immediately and enjoy your refreshing Mango Lassi!'
    ]
  },
  { 
    id: 13, 
    title: 'Beef Stroganoff', 
    slug: 'beef-stroganoff',
    content: 'A creamy Russian dish with tender beef and mushrooms served over noodles, perfect for a comforting dinner.',
    image: '/images/Beef.png?height=600&width=800',
    ingredients: [
      '500g beef sirloin, thinly sliced',
      '1 onion, finely chopped',
      '300g mushrooms, sliced',
      '2 cloves garlic, minced',
      '2 tbsp all-purpose flour',
      '2 cups beef broth',
      '1 tbsp Dijon mustard',
      '1/2 cup sour cream',
      'Salt and pepper to taste',
      '300g egg noodles',
      'Chopped parsley for garnish'
    ],
    instructions: [
      'Cook egg noodles according to package instructions. Set aside.',
      'Season beef with salt and pepper. Brown in a large skillet over medium-high heat. Remove and set aside.',
      'In the same skillet, sauté onions and mushrooms until softened.',
      'Add garlic and cook for another minute.',
      'Sprinkle flour over the vegetables and stir to coat.',
      'Gradually add beef broth, stirring constantly to prevent lumps.',
      'Add Dijon mustard and simmer until the sauce thickens.',
      'Stir in sour cream and return the beef to the skillet. Heat through.',
      'Serve over cooked egg noodles and garnish with chopped parsley.'
    ]
  },
  { 
    id: 14, 
    title: 'Caprese Salad', 
    slug: 'caprese-salad',
    content: 'A simple and elegant Italian salad that showcases the colors of the Italian flag with fresh mozzarella, tomatoes, and basil.',
    image: '/images/salad.png?height=600&width=800',
    ingredients: [
      '3 large ripe tomatoes, sliced',
      '250g fresh mozzarella, sliced',
      'A bunch of fresh basil leaves',
      '3 tbsp extra virgin olive oil',
      '2 tbsp balsamic vinegar (optional)',
      'Salt and freshly ground black pepper to taste'
    ],
    instructions: [
      'Arrange alternating slices of tomato and mozzarella on a serving platter.',
      'Tuck fresh basil leaves between the slices.',
      'Drizzle extra virgin olive oil over the salad.',
      'If using, drizzle balsamic vinegar.',
      'Season with salt and freshly ground black pepper.',
      'Serve immediately at room temperature.'
    ]
  },
  { 
    id: 15, 
    title: 'Lemon Meringue Pie', 
    slug: 'lemon-meringue-pie',
    content: 'A classic dessert featuring a buttery crust, tangy lemon filling, and a fluffy meringue topping.',
    image: '/images/Lemon.png?height=600&width=800',
    ingredients: [
      'For the crust:',
      '1 1/4 cups all-purpose flour',
      '1/4 cup sugar',
      '1/2 cup cold butter, cubed',
      '1/4 cup ice water',
      'For the lemon filling:',
      '1 1/2 cups sugar',
      '6 tbsp cornstarch',
      '1/4 tsp salt',
      '1 1/2 cups water',
      '4 egg yolks',
      '2 tbsp butter',
      '1/3 cup lemon juice',
      '1 tbsp lemon zest',
      'For the meringue:',
      '4 egg whites',
      '1/2 cup sugar',
      '1/4 tsp cream of tartar'
    ],
    instructions: [
      'For the crust:',
      'Mix flour and sugar. Cut in butter until crumbly. Gradually add water, tossing with a fork until dough forms a ball.',
      'Roll out dough and place in a 9-inch pie plate. Trim and flute edges. Bake at 425°F for 10-12 minutes.',
      'For the lemon filling:',
      'In a saucepan, combine sugar, cornstarch, and salt. Gradually stir in water.',
      'Cook and stir over medium-high heat until thickened and bubbly.',
      'Reduce heat; cook and stir 2 minutes longer. Remove from heat.',
      'Stir a small amount of hot filling into egg yolks; return all to pan, stirring constantly.',
      'Bring to a gentle boil; cook and stir 2 minutes longer.',
      'Remove from heat. Stir in butter, lemon juice, and zest. Pour into crust.',
      'For the meringue:',
      'In a large bowl, beat egg whites and cream of tartar until soft peaks form.',
      'Gradually beat in sugar, 1 tablespoon at a time, until stiff peaks form.',
      'Spread meringue over hot filling, sealing edges to crust.',
      'Bake at 350°F for 15 minutes or until meringue is golden brown.',
      'Cool on a wire rack for 1 hour; refrigerate for at least 3 hours before serving.'
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

