import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/core/models/weather/weather.interface';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.sass']
})
export class ForecastItemComponent {
  @Input() weather: Weather | undefined | null

  formatUnixHour(unix: number | undefined) {
    if (!unix) return 0
    const date = new Date(unix * 1000)

    return new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: true }).format(date)
  }

  formatUnixDay(unix: number | undefined) {
    if (!unix) return ''
    const date = new Date(unix * 1000)
    const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' })
    const relativeDateFormatter = new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' })
    // if date is not today or tomorrow, return the day of the week
    if (date.getDate() > new Date().getDate() + 1)
      return dateFormatter.format(date)
    else
      return relativeDateFormatter.format(date.getDate() - new Date().getDate(), 'day')
  }

  capitalizeFirstLetter(string: string | undefined) {
    if (!string) return ""
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
