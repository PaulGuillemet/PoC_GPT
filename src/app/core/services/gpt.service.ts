import { Injectable } from '@angular/core';
import { KeyService } from './key.service';
// Import chatgpt-api module
import { Configuration, OpenAIApi } from 'openai';

@Injectable({
  providedIn: 'root',
})
export class GptService {
  public configuration: Configuration;
  public openai: OpenAIApi;
  constructor(public keyService: KeyService) {
    this.keyService.keyInit$.subscribe((key) => {
      if (!!key) {
        this.configuration = new Configuration({
          apiKey: key,
        });
        this.openai = new OpenAIApi(this.configuration);
      }
    });
  }

  public async process(prompt: string): Promise<any> {
    try {
      const response = await this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        temperature: 0.9,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log({
        response: response.data,
        tokens: response.data.usage?.total_tokens,
      });
      return response.data.choices[0].text;
    } catch (err) {
      console.log(err);
      this.keyService.resetPassword();
    }
  }
}
