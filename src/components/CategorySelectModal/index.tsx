import { FlatList } from 'react-native'
import { Button } from '../Form/Button'
import { categories } from '../../utils/categories'
import * as C from './styles'

interface Category {
  key: string
  name: string
}

interface Props {
  category: Category
  closeSelectCategory: () => void
  setCategory: (category: Category) => void
}

export const CategorySelectModal = ({
  category,
  setCategory,
  closeSelectCategory
}: Props) => {
  return (
    <C.Container>
      <C.Header>
        <C.Title>Categoria</C.Title>
      </C.Header>

      <FlatList
        data={categories}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <C.Category
            isActive={item.key === category.key}
            onPress={() =>
              setCategory({
                key: item.key,
                name: item.name
              })
            }
          >
            <C.Icon name={item.icon} />
            <C.CategoryName>{item.name}</C.CategoryName>
          </C.Category>
        )}
        ItemSeparatorComponent={() => <C.Separator />}
      />

      <C.Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </C.Footer>
    </C.Container>
  )
}
