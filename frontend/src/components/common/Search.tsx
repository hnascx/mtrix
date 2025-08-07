import { Box, TextField } from "@mui/material"

interface SearchProps {
  searchText: string
  onSearchChange: (value: string) => void
  tagFilter: string
  onTagFilterChange: (value: string) => void
  availableTags: string[]
}

export function Search({
  searchText,
  onSearchChange,
  tagFilter,
  onTagFilterChange,
  availableTags,
}: SearchProps) {
  return (
    <Box className="grid grid-cols-[8fr_1fr] w-full gap-4 pt-10 pb-8">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Busque por título ou descrição..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-transparent"
      />
      <TextField
        fullWidth
        variant="outlined"
        value={tagFilter}
        onChange={(e) => onTagFilterChange(e.target.value)}
        select
        SelectProps={{
          native: true,
        }}
        className="bg-transparent"
      >
        <option value="">Todas</option>
        {availableTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </TextField>
    </Box>
  )
}
