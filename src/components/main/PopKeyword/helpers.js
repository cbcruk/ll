export function getStatus(value) {
  if (value === '') {
    return ['new', '신규']
  }

  const order = parseInt(value, 10) || ''

  if (order > 0) {
    return ['up', '상승']
  }

  if (order < 0) {
    return ['down', '하락']
  }

  return ['steady', '변동없음']
}
