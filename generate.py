import os



def main():
    with open('index.html', 'wt') as html:
        html.write('<!DOCTYPE html><html><body>')
        for fname in os.listdir('problems'):
            path = os.path.join('problems', fname)
            with open(path) as f:
                html.write('<h1>{}</h1>'.format(fname[:-3]))
                html.write(f.read())
                html.write('\n<hr>')
        html.write('</body></html>')

if __name__ == '__main__':
    main()
