$files = Get-ChildItem -Path ".\src\components\pages" -Filter "*.jsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Add imports if they don't exist
    if (-not ($content -match "import { useCart }")) {
        $content = $content -replace "import React.*'react'", "import React, { useState } from 'react';`nimport { useCart } from '../../context/CartContext';"
    }
    
    # Add useCart hook
    $content = $content -replace "const \[view, setView\] = useState\('grid'\)", "const [view, setView] = useState('grid');`n  const { addToCart } = useCart()"
    
    # Replace View Details button with Add to Cart
    $content = $content -replace "<button className=`"px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors`">\s*View Details\s*</button>", @"
<button 
                    onClick={() => addToCart(product)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    Add to Cart
                  </button>
"@
    
    Set-Content $file.FullName $content
}
