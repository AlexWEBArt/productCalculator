export default function formattingDate(dateObj) {
    const date = {
        year: dateObj.$y,
        month: dateObj.$m > 9 ? dateObj.$m + 1 : '0' + (dateObj.$m + 1),
        day: dateObj.$D > 9 ? dateObj.$D : '0' + dateObj.$D
    }

    return `${date.year}-${date.month}-${date.day}`
}