"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Category {
  id: string
  name: string
  slug: string
  color: string
}

interface PortfolioFilterProps {
  categories: Category[]
  onFilterChange: (filters: { search: string; category: string | null }) => void
}

export function PortfolioFilter({ categories, onFilterChange }: PortfolioFilterProps) {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleSearchChange = (value: string) => {
    setSearch(value)
    onFilterChange({ search: value, category: selectedCategory })
  }

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId)
    onFilterChange({ search, category: categoryId })
  }

  const clearFilters = () => {
    setSearch("")
    setSelectedCategory(null)
    onFilterChange({ search: "", category: null })
  }

  const hasActiveFilters = search || selectedCategory

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Categories:</span>
        </div>

        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange(null)}
          className="bg-transparent"
        >
          All Projects
        </Button>

        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(category.id)}
            className={cn("bg-transparent", selectedCategory === category.id && "text-white")}
            style={
              selectedCategory === category.id
                ? { backgroundColor: category.color }
                : { borderColor: category.color, color: category.color }
            }
          >
            {category.name}
          </Button>
        ))}

        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
            <X className="h-4 w-4 mr-1" />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {search && (
            <Badge variant="secondary" className="flex items-center space-x-1">
              <span>Search: "{search}"</span>
              <button onClick={() => handleSearchChange("")} className="ml-1 hover:text-destructive">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {selectedCategory && (
            <Badge variant="secondary" className="flex items-center space-x-1">
              <span>Category: {categories.find((c) => c.id === selectedCategory)?.name}</span>
              <button onClick={() => handleCategoryChange(null)} className="ml-1 hover:text-destructive">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
