'use client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/app/[lng]/components/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { Textarea } from '../../Textarea';

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().max(255),
});

const ConnectForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="gap-3 flex flex-col">
        <FormField
          control={form.control}
          name="username"
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[17px] font-normal">姓名</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} className="border-2 border-black py-6 px-4" />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[17px] font-normal">邮箱</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} className="border-2 border-black py-6 px-4" />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
        //   rules={{
        //     required: true,
        //   }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[17px] font-normal">留言</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" {...field} className="border-2 border-black py-6 px-4" rows={10} />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" className="rounded-full bg-[#32373c] text-white px-5 py-6 text-xl">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ConnectForm;
