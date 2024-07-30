import { Injectable } from '@nestjs/common';
import axios from 'axios'
@Injectable()
export class AppService {
  async sin() {
    const d = await axios('http://sinapi:8000/sin')
    return d.data
  }
}
