const tableData = [
  { id: 1, name: '张三', sex: 0, age: 20 },
  { id: 2, name: '李四', sex: 1, age: 30 },
  { id: 3, name: '王五', sex: 0, age: 21 },
  { id: 4, name: '贾六', sex: 1, age: 45 },
]

export const getData = () => {
  return new Promise((resolve) => {
    resolve({
      code: 0,
      data: tableData,
      msg: 'success',
      total: 4
    })
  })
}