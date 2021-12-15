type Temp = {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

type FeelLike = {
  day: number
  night: number
  eve: number
  morn: number
}

export class DateConverter {
  private static dayName = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]

  private static monthName = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  public static convertDate(date: number) {
    const dateObj = new Date(date * 1000)
    return dateObj.toLocaleString()
  }

  public static getDayName(date: number) {
    const dateObj = new Date(date * 1000)
    if (dateObj.getDate() === new Date().getDate()) {
      return 'Hoje'
    }
    if (dateObj.getDate() === new Date().getDate() + 1) {
      return 'Amanhã'
    }
    return DateConverter.dayName[dateObj.getDay()]
  }

  public static getDayNumber(date: number) {
    const dateObj = new Date(date * 1000)
    return dateObj.getDate()
  }

  public static getMonthName(date: number) {
    const dateObj = new Date(date * 1000)
    return DateConverter.monthName[dateObj.getMonth()]
  }

  public static getCurrentTempByDayPeriod(temp: number) {
    const now = new Date()
    if (now.getHours() >= 6 && now.getHours() < 12) {
      return Math.round(temp)
    }
    if (now.getHours() >= 12 && now.getHours() < 18) {
      return Math.round(temp)
    }
    if (now.getHours() >= 18 || now.getHours() < 6) {
      return Math.round(temp)
    }
  }

  public static getCurrentFeelLikeTempByDayPeriod(temp: number) {
    const now = new Date()
    if (now.getHours() >= 6 && now.getHours() < 12) {
      return Math.round(temp)
    }
    if (now.getHours() >= 12 && now.getHours() < 18) {
      return Math.round(temp)
    }
    if (now.getHours() >= 18 || now.getHours() < 6) {
      return Math.round(temp)
    }
  }
}
