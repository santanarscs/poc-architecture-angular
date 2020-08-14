import { MatPaginatorIntl } from '@angular/material/paginator'

const rangeLabel = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) {
    return `0 de ${length}`
  }

  length = Math.max(length, 0)

  const startIndex = page * pageSize

  const endIndex =
    startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize

  return `${startIndex + 1} - ${endIndex} de ${length}`
}

export function getTranslatePaginatorIntl(): MatPaginatorIntl {
  const paginator = new MatPaginatorIntl()

  paginator.itemsPerPageLabel = 'Itens por página'
  paginator.nextPageLabel = 'Próxima página'
  paginator.previousPageLabel = 'Voltar página'
  paginator.getRangeLabel = rangeLabel

  return paginator
}
